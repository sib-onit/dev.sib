# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "news_items", force: :cascade do |t|
    t.string   "headline",               limit: 255
    t.text     "summary",                limit: 65535
    t.text     "text",                   limit: 65535
    t.string   "image_url",              limit: 255
    t.boolean  "published",              limit: 1,     default: true
    t.datetime "publication_date"
    t.string   "departments",            limit: 255
    t.string   "category",               limit: 255
    t.string   "updated_by",             limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "author",                 limit: 255
    t.string   "image_mcb_file_name",    limit: 255
    t.string   "image_mcb_content_type", limit: 255
    t.integer  "image_mcb_file_size",    limit: 4
    t.datetime "image_mcb_updated_at"
    t.string   "image_cdb_file_name",    limit: 255
    t.string   "image_cdb_content_type", limit: 255
    t.integer  "image_cdb_file_size",    limit: 4
    t.datetime "image_cdb_updated_at"
    t.text     "image_mcb_caption",      limit: 65535
    t.text     "image_cdb_caption",      limit: 65535
  end

end
