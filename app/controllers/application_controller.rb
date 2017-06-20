
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    @current_user.reset_session_token
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end
end
