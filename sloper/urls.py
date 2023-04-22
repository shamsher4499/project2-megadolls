from django.urls import path
from sloper import views

urlpatterns = [
    path("view-sloper/", views.view_sloper, name="view_sloper"),
    path("save-design-to-session/", views.save_design_to_session, name="save_design_to_session"),
    path("send-otp/", views.send_otp, name="send_otp"),
    path("sloper-register-guest-user/", views.sloper_register_guest_user, name="sloper_register_guest_user"),
]
