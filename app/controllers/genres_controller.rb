class GenresController < ApplicationController
    def index
    	@genres = Genre.all
    end

    def show
    	@genre = Genre.find(params[:id])
    end

    def new
    	@genre = Genre.new
    end
    
    def create
    	@genre = Genre.new(genre_params)
    	if @genre.save
    		redirect_to action: "index"
    	else
    		redirect_to :back
    	end
    end

    private
    	def genre_params
    		params.require(:genre).permit(:name,:file)
    	end
end
