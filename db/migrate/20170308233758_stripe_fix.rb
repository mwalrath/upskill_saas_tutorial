class StripeFix < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :strip_customer_token
    add_column :users, :stripe_customer_token, :string
  end
end
