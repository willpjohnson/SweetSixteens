class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def index
    if params[:searchData]
      @top_tracks = Track.where("lower(title) LIKE ?", "%#{params[:searchData].downcase}%").limit(10)
    elsif params[:decade]
      @top_tracks = Track
        .joins("INNER JOIN taggings ON tracks.id = taggings.track_id")
        .joins("INNER JOIN tags ON taggings.tag_id = tags.id")
        .where("tags.name = ?", params[:decade])
        .order('created_at DESC').limit(10)
    else
      @top_tracks = Track.order('created_at DESC').limit(10)
    end
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

  def destroy
    @track = Track.find_by(id: params[:id])
    @track.destroy
    render :show
  end

  private
  def track_params
    params.require(:track).permit(:author_id, :title, :body, :artist, :image)
  end
end
