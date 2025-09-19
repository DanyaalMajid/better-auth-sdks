# SignInMagicLinkPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**name** | **str** | User display name. Only used if the user is registering for the first time. Eg: \&quot;my-name\&quot; | [optional] 
**callback_url** | **str** | URL to redirect after magic link verification | [optional] 
**new_user_callback_url** | **str** | URL to redirect after new user signup. Only used if the user is registering for the first time. | [optional] 
**error_callback_url** | **str** | URL to redirect after error. | [optional] 

## Example

```python
from better_auth.models.sign_in_magic_link_post_request import SignInMagicLinkPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInMagicLinkPostRequest from a JSON string
sign_in_magic_link_post_request_instance = SignInMagicLinkPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInMagicLinkPostRequest.to_json())

# convert the object into a dict
sign_in_magic_link_post_request_dict = sign_in_magic_link_post_request_instance.to_dict()
# create an instance of SignInMagicLinkPostRequest from a dict
sign_in_magic_link_post_request_from_dict = SignInMagicLinkPostRequest.from_dict(sign_in_magic_link_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


