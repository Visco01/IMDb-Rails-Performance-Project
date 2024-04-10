require "test_helper"

class TitleRatingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @title_rating = title_ratings(:one)
  end

  test "should get index" do
    get title_ratings_url
    assert_response :success
  end

  test "should get new" do
    get new_title_rating_url
    assert_response :success
  end

  test "should create title_rating" do
    assert_difference("TitleRating.count") do
      post title_ratings_url, params: { title_rating: { average_rating: @title_rating.average_rating, num_votes: @title_rating.num_votes, tconst: @title_rating.tconst } }
    end

    assert_redirected_to title_rating_url(TitleRating.last)
  end

  test "should show title_rating" do
    get title_rating_url(@title_rating)
    assert_response :success
  end

  test "should get edit" do
    get edit_title_rating_url(@title_rating)
    assert_response :success
  end

  test "should update title_rating" do
    patch title_rating_url(@title_rating), params: { title_rating: { average_rating: @title_rating.average_rating, num_votes: @title_rating.num_votes, tconst: @title_rating.tconst } }
    assert_redirected_to title_rating_url(@title_rating)
  end

  test "should destroy title_rating" do
    assert_difference("TitleRating.count", -1) do
      delete title_rating_url(@title_rating)
    end

    assert_redirected_to title_ratings_url
  end
end
