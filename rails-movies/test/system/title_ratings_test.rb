require "application_system_test_case"

class TitleRatingsTest < ApplicationSystemTestCase
  setup do
    @title_rating = title_ratings(:one)
  end

  test "visiting the index" do
    visit title_ratings_url
    assert_selector "h1", text: "Title ratings"
  end

  test "should create title rating" do
    visit title_ratings_url
    click_on "New title rating"

    fill_in "Average rating", with: @title_rating.average_rating
    fill_in "Num votes", with: @title_rating.num_votes
    fill_in "Tconst", with: @title_rating.tconst
    click_on "Create Title rating"

    assert_text "Title rating was successfully created"
    click_on "Back"
  end

  test "should update Title rating" do
    visit title_rating_url(@title_rating)
    click_on "Edit this title rating", match: :first

    fill_in "Average rating", with: @title_rating.average_rating
    fill_in "Num votes", with: @title_rating.num_votes
    fill_in "Tconst", with: @title_rating.tconst
    click_on "Update Title rating"

    assert_text "Title rating was successfully updated"
    click_on "Back"
  end

  test "should destroy Title rating" do
    visit title_rating_url(@title_rating)
    click_on "Destroy this title rating", match: :first

    assert_text "Title rating was successfully destroyed"
  end
end
