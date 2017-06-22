class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def index
    @top_tracks = Track.order('created_at DESC').limit(10)
    render :index
  end

  private
  def track_params
    params.require(:track).permit(:author_id, :title, :body, :artist, :image_url)
  end
end
