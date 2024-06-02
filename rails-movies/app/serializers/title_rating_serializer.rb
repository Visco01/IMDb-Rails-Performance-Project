class TitleRatingSerializer < ActiveModel::Serializer
  def attributes(*args)
    return object.attributes.symbolize_keys if instance_options[:rating_only] == true

    object.attributes.symbolize_keys.merge(title_basic: title_basic)
  end

  def title_basic
    object.title_basic.attributes.symbolize_keys
  end
end
