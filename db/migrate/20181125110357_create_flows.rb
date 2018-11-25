class CreateFlows < ActiveRecord::Migration[5.2]
  def change
    create_table :flows do |t|
      t.string :name
      t.string :description

      t.references :user

      t.timestamps
    end
  end
end
