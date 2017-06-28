class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      if @vote.votable_type == "Annotation"
        annotation_id = @vote.votable_id
        @annotation = Annotation.find_by(id: annotation_id)
        render "/api/annotations/show"
      elsif @vote.votable_type == "Comment"
        comment_id = @vote.votable_id
        debugger
      end
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
  def vote_params
    params.require(:vote).permit(:user_id, :votable_id, :votable_type, :value)
  end
end
