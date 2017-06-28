class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where('annotation_id = ?', params[:annotation_id].to_i)
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @comments = Comment.where('annotation_id = ?', @comment.annotation_id)
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comments = Comment.where('annotation_id = ?', @comment.annotation_id)
    @comment.destroy
    render :index
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :annotation_id, :body, :score)
  end
end
