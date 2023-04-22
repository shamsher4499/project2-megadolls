from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.core.mail import send_mail
from adminpanel.models import EmailTemplate

EMAIL_FROM = settings.EMAIL_HOST_USER

def verify_mail(user):
    link = f'{settings.SITE_URL}web_verify_mail/{user.email}'
    email_template = EmailTemplate.objects.get(title='User Verification')
    subject = email_template.subject
    content = email_template.content
    merge_data = {'link': link, 'content': content}   
    html_message = render_to_string("email_html/account-signup-verification.html", merge_data)  
    plain_message = strip_tags(html_message)
    send_mail(subject, plain_message, EMAIL_FROM, [user.email], fail_silently=False, html_message=html_message)

def welcome_mail_for_signing_up(email, name):
    email_data = EmailTemplate.objects.get(title = "Welcome To Megadolls")
    content = email_data.content
    merge_data = {'name': name, "content": content}   
    html_message = render_to_string("email_html/welcome.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def otp_to_reset_password(otp, email):
    email_data = EmailTemplate.objects.get(title = "OTP To Reset Password")
    content = email_data.content
    merge_data = {'otp': otp, 'content': content}  
    html_message = render_to_string("email_html/forgot-password.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def blog_subscription_confirmation(email):
    email_data = EmailTemplate.objects.get(title = "Thank You For Subscribing To Our Blogs")
    content = email_data.content  
    merge_data = {'content': content, 'email': email}
    html_message = render_to_string("email_html/subscribe_to_blog.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def newsletter_confirmation(email):
    email_data = EmailTemplate.objects.get(title = "Newsletter Confirmation")
    content = email_data.content
    merge_data = {'content': content, 'email': email}
    html_message = render_to_string("email_html/subscribe-to-our-newsletter.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def shero_dolls_subscription_confirmation(email, name):
    email_data = EmailTemplate.objects.get(title = "Shero Dolls Subscription Confirmation")
    content = email_data.content
    merge_data = {'content': content, 'name': name}
    html_message = render_to_string("email_html/shero-subscription-confirmation.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)  

def send_mail_subscription_cancel(email, name):
    email_data = EmailTemplate.objects.get(title = "Shero Dolls Subscription Cancel")
    content = email_data.content
    merge_data = {'content': content, 'name': name}
    html_message = render_to_string("email_html/shero-subscription-cancellation.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def send_mail_giftcard(img_url='', receiver_email='', sender_email='', sender_message=''):
    email_data = EmailTemplate.objects.get(title='Gift Card')
    content = email_data.content
    merge_data = {'content': content, 'img_url': img_url, 'sender_email': sender_email, 'sender_message': sender_message}
    html_message = render_to_string("email_html/gift-card-recipient.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [receiver_email], fail_silently=False, html_message=html_message)

def send_mail_giftcard_sender(receiver_email, sender_email, receipt_url, gift_card=None):
    email_data = EmailTemplate.objects.get(title='Sender Mail To Send Gift Someone')
    content = email_data.content    
    merge_data = {'content': content, 'receiver_email': receiver_email, 'receipt': receipt_url, 'gift_card': gift_card}
    html_message = render_to_string("email_html/gift-card-sender.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [sender_email], fail_silently=False, html_message=html_message)


def send_mail_shero_subscription_gift_recipient(subscription_plan='', receiver_email='', sender_email='', sender_message=''):
    email_data = EmailTemplate.objects.get(title='Shero Subscription Gift')
    content = email_data.content
    merge_data = {'subscription_plan': subscription_plan, 'content': content, 'sender_email': sender_email, 'sender_message': sender_message}
    html_message = render_to_string("email_html/shero-gift-subscription-recipient.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [receiver_email], fail_silently=False, html_message=html_message)

def send_mail_shero_subscription_gift_sender(subscription_plan, receiver_email, sender_email, receipt_url):
    email_data = EmailTemplate.objects.get(title='Sender Mail To Send Shero Subscripton Gift Someone')
    content = email_data.content
    merge_data = {'subscription_plan': subscription_plan, 'content': content, 'receiver_email': receiver_email, 'receipt': receipt_url }
    html_message = render_to_string("email_html/shero-gift-subscription-sender.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [sender_email], fail_silently=False, html_message=html_message)


def send_redeem_otp(user, otp):
    email_data = EmailTemplate.objects.get(title='Gift Card otp')
    content = email_data.content
    merge_data = {'content': content, 'otp': otp}
    html_message = render_to_string("email_html/otp_to_redeem_giftcard.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [user.email], fail_silently=False, html_message=html_message)

def send_mail_order_place(email, order_id, order_date, amount_dict, is_user_authenticated, product_order=None):
    email_data = EmailTemplate.objects.get(title='Order Place')
    total_amount = 0.00
    if 'stripe' in amount_dict:
        stripe_amount = float(amount_dict.get("stripe"))
        total_amount += stripe_amount
    if 'wallet' in amount_dict:
        wallet_amount = float(amount_dict.get("wallet"))
        total_amount += wallet_amount
    merge_data = {'content': email_data.content, 'total_amount': total_amount, 'order_id': order_id, 'order_date': order_date, 'subject': email_data.subject, 'is_user_authenticated': is_user_authenticated, 'product_order': product_order}
    html_message = render_to_string("email_html/order-confirmation.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def cancel_order(email, name, order_id):
    email_data = EmailTemplate.objects.get(title='Order Cancel')
    content = email_data.content
    merge_data = {'content': content, 'order_id': order_id, 'name': name, 'subject': email_data.subject}
    html_message = render_to_string("email_html/order_cancel.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def send_mail_for_order_shipped(email, order_id, tracking_url=None):
    if not tracking_url:
        tracking_url = ''
    email_data = EmailTemplate.objects.get(title='Order Shipped')
    if not tracking_url:
        tracking_url = ''
    content = email_data.content
    merge_data = {'content': content, 'order_id':order_id, 'tracking_url':tracking_url}
    html_message = render_to_string("email_html/order_shipped.html", merge_data)
    plain_message = strip_tags(html_message)
    send_mail(email_data.subject, plain_message, EMAIL_FROM, [email], fail_silently=False, html_message=html_message)

def send_mail_plan_discontinue(emails:list):
    email_template = EmailTemplate.objects.get(title='Shero Subscription Plan Discontinue')
    subject = email_template.subject
    message = email_template.content
    plain_text = strip_tags(message)
    send_mail(subject, plain_text, EMAIL_FROM, emails, fail_silently=False)

def mail_send_verify_otp(email, otp):
    send_mail(subject="OTP for megadolls sloper account", message=str(otp), from_email=EMAIL_FROM, recipient_list=[email], fail_silently=False)

def mail_send_user_credential(email, password):
    send_mail("Your Sloper Account Credential", password, EMAIL_FROM, [email], fail_silently=False)