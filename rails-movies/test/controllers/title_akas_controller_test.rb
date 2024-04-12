require "test_helper"

class TitleAkasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @title_aka = title_akas(:one)
  end

  test "should get index" do
    get title_akas_url
    assert_response :success
  end

  test "should get new" do
    get new_title_aka_url
    assert_response :success
  end

  test "should create title_aka" do
    assert_difference("TitleAka.count") do
      post title_akas_url, params: { title_aka: { is_original_title: @title_aka.is_original_title, language: @title_aka.language, ordering: @title_aka.ordering, region: @title_aka.region, title: @title_aka.title, title_id: @title_aka.title_id } }
    end

    assert_redirected_to title_aka_url(TitleAka.last)
  end

  test "should show title_aka" do
    get title_aka_url(@title_aka)
    assert_response :success
  end

  test "should get edit" do
    get edit_title_aka_url(@title_aka)
    assert_response :success
  end

  test "should update title_aka" do
    patch title_aka_url(@title_aka), params: { title_aka: { is_original_title: @title_aka.is_original_title, language: @title_aka.language, ordering: @title_aka.ordering, region: @title_aka.region, title: @title_aka.title, title_id: @title_aka.title_id } }
    assert_redirected_to title_aka_url(@title_aka)
  end

  test "should destroy title_aka" do
    assert_difference("TitleAka.count", -1) do
      delete title_aka_url(@title_aka)
    end

    assert_redirected_to title_akas_url
  end
end
