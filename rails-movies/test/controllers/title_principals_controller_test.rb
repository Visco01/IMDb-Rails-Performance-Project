require "test_helper"

class TitlePrincipalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @title_principal = title_principals(:one)
  end

  test "should get index" do
    get title_principals_url
    assert_response :success
  end

  test "should get new" do
    get new_title_principal_url
    assert_response :success
  end

  test "should create title_principal" do
    assert_difference("TitlePrincipal.count") do
      post title_principals_url, params: { title_principal: { category: @title_principal.category, characters: @title_principal.characters, job: @title_principal.job, nconst: @title_principal.nconst, ordering: @title_principal.ordering, tconst: @title_principal.tconst } }
    end

    assert_redirected_to title_principal_url(TitlePrincipal.last)
  end

  test "should show title_principal" do
    get title_principal_url(@title_principal)
    assert_response :success
  end

  test "should get edit" do
    get edit_title_principal_url(@title_principal)
    assert_response :success
  end

  test "should update title_principal" do
    patch title_principal_url(@title_principal), params: { title_principal: { category: @title_principal.category, characters: @title_principal.characters, job: @title_principal.job, nconst: @title_principal.nconst, ordering: @title_principal.ordering, tconst: @title_principal.tconst } }
    assert_redirected_to title_principal_url(@title_principal)
  end

  test "should destroy title_principal" do
    assert_difference("TitlePrincipal.count", -1) do
      delete title_principal_url(@title_principal)
    end

    assert_redirected_to title_principals_url
  end
end
