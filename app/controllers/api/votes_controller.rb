class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      if @vote.votable_type == "Annotation"
        annotation_id = @vote.votable_id
        @annotation = Annotation.find_by(id: annotation_id)
        @annotation.score += @vote.value
        @annotation.save!
        # render "/api/annotations/show"
        render :show
      elsif @vote.votable_type == "Comment"
        comment_id = @vote.votable_id
        @comment = Comment.find_by(id: comment_id)
        @comment.score += @vote.value
        @comment.save!
        # render "/api/comments"
        render :show
      end
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    type = @vote.votable_type
    votable_id = @vote.votable_id
    @vote.destroy
    if type == "Annotation"
      @annotation = Annotation.find_by(id: votable_id)
      @annotation.score -= @vote.value
      @annotation.save!
      render :show
    elsif type == "Comment"
      @comment = Comment.find_by(id: votable_id)
      @comment.score -= @vote.value
      @comment.save!
      render :show
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:user_id, :votable_id, :votable_type, :value)
  end
end
