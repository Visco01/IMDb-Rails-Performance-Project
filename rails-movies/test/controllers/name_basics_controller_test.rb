require "test_helper"

class NameBasicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @name_basic = name_basics(:one)
  end

  test "should get index" do
    get name_basics_url
    assert_response :success
  end

  test "should get new" do
    get new_name_basic_url
    assert_response :success
  end

  test "should create name_basic" do
    assert_difference("NameBasic.count") do
      post name_basics_url, params: { name_basic: { birth_year: @name_basic.birth_year, death_year: @name_basic.death_year, nconst: @name_basic.nconst, primary_name: @name_basic.primary_name } }
    end

    assert_redirected_to name_basic_url(NameBasic.last)
  end

  test "should show name_basic" do
    get name_basic_url(@name_basic)
    assert_response :success
  end

  test "should get edit" do
    get edit_name_basic_url(@name_basic)
    assert_response :success
  end

  test "should update name_basic" do
    patch name_basic_url(@name_basic), params: { name_basic: { birth_year: @name_basic.birth_year, death_year: @name_basic.death_year, nconst: @name_basic.nconst, primary_name: @name_basic.primary_name } }
    assert_redirected_to name_basic_url(@name_basic)
  end

  test "should destroy name_basic" do
    assert_difference("NameBasic.count", -1) do
      delete name_basic_url(@name_basic)
    end

    assert_redirected_to name_basics_url
  end
end
