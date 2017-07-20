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
    primary_tag = tag_params[:primary_tag]
    @track = Track.new(track_params)

    if @track.save
      create_tag(primary_tag)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def create_tag(primary_tag)
    tag = Tag.find_by(name: primary_tag)
    tagging = Tagging.new({tag_id: tag.id, track_id: @track.id})
    tagging.save
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

  def tag_params
    params.require(:track).permit(:primary_tag)
  end
end
