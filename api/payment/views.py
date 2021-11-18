from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
import braintree

# Create your views here.

gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="vx92yjfm669rhf76",
        public_key="zvr8xbbkwsvrbpqw",
        private_key="7cb2ba9b10ea59c0055ba0d2acc33ef6"
    )
)


def validate_user_session(id, token):
    usermodel = get_user_model()

    try:
        user = usermodel.objects.get(pk=id)
        if user.session_token == token:
            return True
    except usermodel.DoesNotExist:
        return False


@csrf_exempt
def generate_token(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid session, Please login again'})

    return JsonResponse({'clientToken': gateway.client_token.generate(), 'success': True})
