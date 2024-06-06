class DirectorSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys.merge(professions: professions)
          .merge(title_basics: title_basics)
  end

  def professions
    object.professions.map(&:name)
  end

  def title_basics
    object.title_basics.map do |title_basic|
      {
        primary_title: title_basic.primary_title,
        title_type: title_basic.title_type
      }
    end
  end
end
