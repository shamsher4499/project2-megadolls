from django.http import JsonResponse
from django.shortcuts import render
from adminpanel.models import SloperTemplate, SloperTexture, SloperElement, SloperMulticolorIconSVG, User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from web_app.views import random_with_N_digits
from web_app.email import mail_send_verify_otp, mail_send_user_credential

def view_sloper(request):
    sloper_templates = SloperTemplate.objects.all()
    textures = SloperTexture.objects.all()
    elements = SloperElement.objects.all()
    svg_icons = SloperMulticolorIconSVG.objects.all()
    # svg = SloperElement.objects.get(id=7)
    
    return render(request, 'sloper-tool/sloper.html', 
        {
            'sloper_templates': sloper_templates,
            'textures': textures,
            'elements': elements,
            'svg_icons': svg_icons
        }
    )

@login_required(login_url='web_login')
@csrf_exempt
def save_design_to_session(request):
    if request.method == "POST":
        print(request.body, "----------------")
        # create model called SloperSubscriptionPlan
        # create model called SloperSubscriptionPlanBenefit
        # create model called SloperSubscriptionPlanRelationPlanBenefit
        

        # create model called SloperUserDesign
            # user_id
            # file_path
            # folder_id
            # created_at
            # updated_at
        # create another model called SloperUserFolder
            # user_id
            # folder_name
        # create model called SloperTemporaryData
            # sloper_user
            # file_path
            # create_time
            # update_time
            # when_to_remove_date
        # create model called SloperUserSubscription
            # user_id
            # subscription_id
            # start_at
            # expire_at




def send_otp(request):
    if request.method == "POST":
        email = request.POST.get('email')
        otp = random_with_N_digits(4)
        user, is_created = User.objects.update_or_create(email=email)
        user.otp = otp
        user.save()
        mail_send_verify_otp(email, otp)
        return JsonResponse({'success': True, 'message': 'otp send to email address'})


def sloper_register_guest_user(request):
    if request.method == "POST":
        email = request.POST.get('guest_email')
        otp = request.POST.get('otp')

        user = User.object.filter(email=email, otp=otp)

        if user.exists():
            password = random_with_N_digits(8)
            user.update(password=password, is_verified=True, otp=None)
            mail_send_user_credential(email, password)
            return JsonResponse({'success': True, 'message': 'Registered Successfully'})

        return JsonResponse({'success': False, 'message': 'otp not match please try again'})

