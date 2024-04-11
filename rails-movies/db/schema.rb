# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_11_093835) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_genres_on_name", unique: true
  end

  create_table "genres_title_basics", id: false, force: :cascade do |t|
    t.bigint "title_basic_id", null: false
    t.bigint "genre_id", null: false
    t.index ["genre_id", "title_basic_id"], name: "index_genres_title_basics_on_genre_id_and_title_basic_id"
    t.index ["title_basic_id", "genre_id"], name: "index_genres_title_basics_on_title_basic_id_and_genre_id"
  end

  create_table "title_basics", force: :cascade do |t|
    t.integer "tconst", null: false
    t.string "title_type"
    t.string "primary_title"
    t.string "original_title"
    t.boolean "is_adult"
    t.integer "start_year"
    t.integer "end_year"
    t.integer "runtime_minutes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tconst"], name: "index_title_basics_on_tconst", unique: true
  end

  create_table "title_ratings", force: :cascade do |t|
    t.integer "tconst", null: false
    t.float "average_rating"
    t.integer "num_votes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tconst"], name: "index_title_ratings_on_tconst", unique: true
  end

  add_foreign_key "genres_title_basics", "genres"
  add_foreign_key "genres_title_basics", "title_basics"
end
