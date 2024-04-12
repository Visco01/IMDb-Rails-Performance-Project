require "test_helper"

class TitleCrewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @title_crew = title_crews(:one)
  end

  test "should get index" do
    get title_crews_url
    assert_response :success
  end

  test "should get new" do
    get new_title_crew_url
    assert_response :success
  end

  test "should create title_crew" do
    assert_difference("TitleCrew.count") do
      post title_crews_url, params: { title_crew: { tconst: @title_crew.tconst } }
    end

    assert_redirected_to title_crew_url(TitleCrew.last)
  end

  test "should show title_crew" do
    get title_crew_url(@title_crew)
    assert_response :success
  end

  test "should get edit" do
    get edit_title_crew_url(@title_crew)
    assert_response :success
  end

  test "should update title_crew" do
    patch title_crew_url(@title_crew), params: { title_crew: { tconst: @title_crew.tconst } }
    assert_redirected_to title_crew_url(@title_crew)
  end

  test "should destroy title_crew" do
    assert_difference("TitleCrew.count", -1) do
      delete title_crew_url(@title_crew)
    end

    assert_redirected_to title_crews_url
  end
end
