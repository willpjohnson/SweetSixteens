class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def index
    @top_tracks = Track.order('created_at DESC').limit(10)
    render :index
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  def track_params
    params.require(:track).permit(:author_id, :title, :body, :artist, :image)
  end
end
