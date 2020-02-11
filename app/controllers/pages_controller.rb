class PagesController < ApplicationController
  def index
  end
  
  def episodes
    @episodes = Course.first.episodes
  end
  
end
