from django.conf import settings
from django.core.mail import send_mail
from .models import User, EmailTemplate
from django.core.mail import EmailMessage
from threading import Thread
from django.template.loader import render_to_string
from django.utils.html import strip_tags

EMAIL_FROM = settings.EMAIL_HOST_USER
EMAIL_HOST_PASSWORD = settings.EMAIL_HOST_PASSWORD

class EmailThread(Thread):
    def __init__(self, subject, html_message, recipient_list):
        self.subject = subject
        self.html_messages = html_message
        self.recipient_list = recipient_list
        Thread.__init__(self)

    def run (self):
        msg = EmailMessage(subject = self.subject, body = self.html_messages, from_email = EMAIL_FROM, bcc = self.recipient_list)
        msg.content_subtype = "html"
        msg.send()
    

def new_blog_post(recipient_list):
    email_data = EmailTemplate.objects.get(title = "New Blog")
    subject = email_data.subject
    content = email_data.content
    merge_data = {'content': content}
    html_message = render_to_string("email_template/the-blog-article.html", merge_data)
    EmailThread(subject=subject, html_message=html_message, recipient_list=recipient_list).start()


def newsletter_mail_to_subscribers(recipient_list, subject, content_html):
    content = strip_tags(content_html)
    merge_data = {'content': content}
    html_message = render_to_string("email_template/newsletter.html", merge_data)
    EmailThread(subject=subject, html_message=html_message, recipient_list=recipient_list).start()


def reply_to_user_inquiry(email, reply_text):
    subject = "Reply to your Inquiry"
    content = strip_tags(reply_text)
    merge_data = {'content': content}
    html_message = render_to_string('email_template/reply_to_inquiry.html', merge_data)
    plain_message = strip_tags(html_message)
    send_mail(subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)


def add_sub_admin_mail(email, username, password):
    email_data = EmailTemplate.objects.get(title = "Add Sub Admin Mail")
    content = email_data.content
    merge_data = {'content': content, 'email': email, 'username': username, 'password': password}
    html_message = render_to_string("email_template/add-sub-admin.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)


def forgot_password(email, password):
    email_data = EmailTemplate.objects.get(title = "Superadmin Forgot Password")
    content = email_data.content
    merge_data = {'content': content, 'password': password}
    html_message = render_to_string("email_template/superadmin-forgot-password.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)


def admin_changed_user_password_mail(email, name, password):
    email_data = EmailTemplate.objects.get(title = "Admin Changed User Password")
    content = email_data.content
    merge_data = {'name': name, 'content': content, 'password': password}
    html_message = render_to_string("email_template/admin-changed-user-password.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message) 


def admin_canceled_order_mail(name, email, order_id, time):
    email_data = EmailTemplate.objects.get(title = "Admin Canceled User Order")
    content = email_data.content
    merge_data = {'name': name, 'content': content, 'order_id': order_id, 'time': time}
    html_message = render_to_string("email_template/admin-canceled-user-order.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)


def admin_refund_amount_to_wallet_order_mail(email, order_id, time):
    email_data = EmailTemplate.objects.get(title = "Wallet Amount Refunded For Cancelling Order")
    content = email_data.content
    merge_data = {'content': content, 'order_id': order_id, 'time': time}
    html_message = render_to_string("email_template/wallet-amount-refunded.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)


def admin_added_user_mail(name, email, password):
    email_data = EmailTemplate.objects.get(title = "Admin Added User Mail")
    content = email_data.content
    merge_data = {'content': content, 'password': password, 'name': name, 'email': email}
    html_message = render_to_string("email_template/admin-added-user.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)
