class User < ActiveRecord::Base
  validates :email, null: false, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.has_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def has_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

end
