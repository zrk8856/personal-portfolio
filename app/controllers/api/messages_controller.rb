class Api::MessagesController < ApplicationController

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    private

    def message_params
        params.permit(:name, :email, :subject, :message)
    end

end
