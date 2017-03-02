class ContactsController < ApplicationController
  
  # Get request to/contact-us
  # Show new contact form
   def new 
     @contact = Contact.new
   end
   
   # POST request /contacts
   def create
     # mass assignment of form fields into Contact object
     @contact = Contact.new(contact_params)
     if @contact.save
       name = params[:contact][:name]
       email = params[:contact][:email]
       body = params[:contact][:comments]
ContactMailer.contact_email(name, email, body).deliver
       flash[:success] = "Message sent."
       redirect_to new_contact_path
     else
       flash[:danger] = @contact.errors.full_messages.join(", ")
       redirect_to new_contact_path
     end
   end
   
   private
    def contact_params
      params.require(:contact).permit(:name, :email, :comments)
    end
end