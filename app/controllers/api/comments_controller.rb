class Api::CommentsController < ApplicationController
  def index
    if params[:user_id]
      @comments = Comment.where(author_id: params[:user_id]).limit(10)
    else
      if params[:annotation_id]
        @comments = Comment.where(commentable_id: params[:annotation_id], commentable_type: "Annotation")
      else
        @comments = Comment.where(commentable_id: params[:track_id], commentable_type: "Track")
      end
    end

    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @comments = Comment.where('commentable_id = ?', @comment.commentable_id)
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comments = Comment.where('commentable_id = ?', @comment.commentable_id)
    @comment.destroy
    render :index
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :commentable_id, :commentable_type, :body, :score)
  end
end
