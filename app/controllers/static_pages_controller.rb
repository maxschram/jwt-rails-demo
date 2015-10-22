class StaticPagesController < ApplicationController
  def root
    render file: 'public/root.html'
  end
end
