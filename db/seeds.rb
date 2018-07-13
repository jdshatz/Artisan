# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

firstoptions = [
	[ "drawing", "drawing.png"], 
	[ "photography", "photography.png"],
	[ "fashion",  "fashion.png"],
	[ "graphic design", "graphic_design.png"],
	[ "painting", "painting.png"],
	[ "sculpture", "sculpture.png"]
]

firstoptions.each do |name, file|
	Genre.create(name: name, file: file, selected: false )
end