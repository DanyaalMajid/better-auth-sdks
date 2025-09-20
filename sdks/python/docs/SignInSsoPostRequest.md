# SignInSsoPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address to sign in with. This is used to identify the issuer to sign in with. It&#39;s optional if the issuer is provided | [optional] 
**issuer** | **str** | The issuer identifier, this is the URL of the provider and can be used to verify the provider and identify the provider during login. It&#39;s optional if the email is provided | [optional] 
**provider_id** | **str** | The ID of the provider to sign in with. This can be provided instead of email or issuer | [optional] 
**callback_url** | **str** | The URL to redirect to after login | 
**error_callback_url** | **str** | The URL to redirect to after login | [optional] 
**new_user_callback_url** | **str** | The URL to redirect to after login if the user is new | [optional] 

## Example

```python
from better_auth.models.sign_in_sso_post_request import SignInSsoPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInSsoPostRequest from a JSON string
sign_in_sso_post_request_instance = SignInSsoPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInSsoPostRequest.to_json())

# convert the object into a dict
sign_in_sso_post_request_dict = sign_in_sso_post_request_instance.to_dict()
# create an instance of SignInSsoPostRequest from a dict
sign_in_sso_post_request_from_dict = SignInSsoPostRequest.from_dict(sign_in_sso_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


