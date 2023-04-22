from django.contrib import messages
from django.conf import settings
# from adminpanel.models import *
import stripe
from django.http import HttpRequest, JsonResponse
from adminpanel.models import TokenAndSecretKey

# try:
    # token_and_key = TokenAndSecretKey.objects.get(name="STRIPE_SECRET_KEY")
    # stripe.api_key = token_and_key.key
stripe.api_key = settings.STRIPE_SECRET_KEY
DOMAIN = settings.SITE_URL
# except:
#     pass

def gift_card_payment(line_item: list=[], success_url: str='', cancel_url: str='', customer_email: str=None):
    # Set Stripe API key
    return stripe.checkout.Session.create(
        payment_method_types=["card"],
        mode = 'payment',
        success_url = DOMAIN + success_url,
        cancel_url = DOMAIN + cancel_url, # The cancel_url is typically set to the original product page
        # line_items = checkout_data.get('products'),
        line_items=line_item,
        customer_email = customer_email
    )


# need to add column cust_id in user table
def create_customer(email:str):
    # Reads application/json and returns a response
    # data = json.loads(request.data)
    try:
        # Create a new customer object
       return stripe.Customer.create(
            email=email,
            payment_method="pm_card_visa",
            invoice_settings={"default_payment_method": "pm_card_visa"},
        )
    except Exception as e:
        return None
    
    
def create_product(name: str, description: str):
    return stripe.Product.create(name=name, description=description)

def get_product(stripe_product_id: str):
    return stripe.Product.retrieve(stripe_product_id)

def update_product(stripe_product_id: str, name: str, description: str):
    return stripe.Product.modify(
        stripe_product_id,
        name=name,
        description=description
    )

def get_all_product():
    stripe.Product.list()


def delete_product(stripe_product_id: str):
    return stripe.Product.delete(stripe_product_id)

def create_subscription_price(amount: int=0, currency="usd", recurring: dict={"interval": "month", "interval_count": 1}, stripe_product_id: str=''):
    return stripe.Price.create(
        unit_amount=amount,
        currency=currency,
        recurring=recurring,
        product=stripe_product_id,
    )
    
def get_subscription_price(stripe_product_id: str):
    return stripe.Price.retrieve(
        stripe_product_id
    )
    
def update_subscription_price(subscription_price_id: str="", amount: int=0, currency="usd", recurring: dict={"interval": "month", "interval_count": 1}, stripe_product_id: str=''):
    return stripe.Price.modify(
        subscription_price_id,
        unit_amount=amount,
        currency=currency,
        recurring=recurring,
        product=stripe_product_id,
    )

def get_all_subscription_price():
    return stripe.Price.list()


def payment_for_subscription(line_items: list=[], success_url='', cancel_url: str='', user_id: int = None, customer_id: str=''):
    return stripe.checkout.Session.create(
        client_reference_id = user_id,
        success_url = DOMAIN + success_url,
        cancel_url = DOMAIN + cancel_url,
        payment_method_types= ["card"],
        mode = "subscription",
        line_items = line_items,
        customer = customer_id,
    )

def retrive_checkout_session(checkout_session_id):
    return stripe.checkout.Session.retrieve(checkout_session_id)

def cancel_stripe_subscription(stripe_subscription_id:str):
    return stripe.Subscription.delete(stripe_subscription_id)

def get_subscription(subscritpion_id:str):
    return stripe.Subscription.retrieve(subscritpion_id)

def create_webhook(url:str='', enabled_events:list=[]):
    return stripe.WebhookEndpoint.create(
        url=url,
        enabled_events=enabled_events,
    )
    
def get_all_web_hooks():
    return stripe.WebhookEndpoint.list()


def create_source(customer_id):
    stripe.Customer.create_source(
        customer_id,
        source="tok_amex",
    )

# def create_subscription_schedule():
#     product = create_product("testing-monthly", "monthly subscription")
#     price = stripe.Price.create(
#             unit_amount=300,
#             currency='usd',
#             # type="one_time",
#             recurring={"interval": "month"},
#             product=product['id'],
#         )
    
#     subscription_schedule = stripe.SubscriptionSchedule.create(
#             customer="cus_MH0wwM10J4AxEs",
#             start_date=1661776729,
#             end_behavior="cancel",
#             phases=[
#                 {
#                     "items": [
#                         {
#                             "price": price['id'],
#                             "quantity": 1,
#                         },
#                     ],
#                     "end_date": 1661776969
#                 },
#             ],
#         )
    
#     subscription_dict = {
#         'product': product,
#         'price': price,
#         'subscription_schedule': subscription_schedule
#     }
#     return subscription_dict