# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "z", password: "z", password_confirmation: "z")

Category.create([{category: "Holidays", user_id: user.id},{category: "Sports", user_id: user.id},{category: "Beach", user_id: user.id}, {category: "Conversation", user_id: user.id}])
puts "SEEEDING"

Word.create([{french:"oui", english:"yes", target:"french", user_id: user.id},{french:"mer", english:"sea", target:"french", user_id: user.id},{french:"courir", english:"to run", target:"french", user_id: user.id},{french:"bonheur", english:"happiness", target:"french", user_id: user.id}])

Expression.create([{french:"ça ne casse pas trois pattes à un canard", english:"it's not that great", target:"french", user_id: user.id}, {french:"c'est dingue", english:"it's crazy", target:"french", user_id: user.id}, {french:"poser un lapin", english:"to stand somone up", target:"french", user_id: user.id}])