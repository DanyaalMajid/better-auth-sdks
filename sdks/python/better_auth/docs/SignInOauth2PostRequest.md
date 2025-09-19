# SignInOauth2PostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** | The provider ID for the OAuth provider | 
**callback_url** | **str** | The URL to redirect to after sign in | [optional] 
**error_callback_url** | **str** | The URL to redirect to if an error occurs | [optional] 
**new_user_callback_url** | **str** | The URL to redirect to after login if the user is new. Eg: \&quot;/welcome\&quot; | [optional] 
**disable_redirect** | **bool** | Disable redirect | [optional] 
**scopes** | **List[object]** | Scopes to be passed to the provider authorization request. | [optional] 
**request_sign_up** | **bool** | Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider. Eg: false | [optional] 

## Example

```python
from better_auth.models.sign_in_oauth2_post_request import SignInOauth2PostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInOauth2PostRequest from a JSON string
sign_in_oauth2_post_request_instance = SignInOauth2PostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInOauth2PostRequest.to_json())

# convert the object into a dict
sign_in_oauth2_post_request_dict = sign_in_oauth2_post_request_instance.to_dict()
# create an instance of SignInOauth2PostRequest from a dict
sign_in_oauth2_post_request_from_dict = SignInOauth2PostRequest.from_dict(sign_in_oauth2_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


