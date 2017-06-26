class Api::AnnotationsController < ApplicationController
  def index
    @annotations = Annotation.where('track_id = ?', params[:track_id].to_i)
    render :index
  end

  def show
    @annotation = Annotation.find_by(id: params[:id])
    render :show
  end

  private
  def annotation_params
    params.require(:annotation).permit(:track_id, :author_id, :body, :score, :start_idx, :end_idx)
  end
end
