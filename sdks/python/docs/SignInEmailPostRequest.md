# SignInEmailPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the user | 
**password** | **str** | Password of the user | 
**callback_url** | **str** | Callback URL to use as a redirect for email verification | [optional] 
**remember_me** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sign_in_email_post_request import SignInEmailPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInEmailPostRequest from a JSON string
sign_in_email_post_request_instance = SignInEmailPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInEmailPostRequest.to_json())

# convert the object into a dict
sign_in_email_post_request_dict = sign_in_email_post_request_instance.to_dict()
# create an instance of SignInEmailPostRequest from a dict
sign_in_email_post_request_from_dict = SignInEmailPostRequest.from_dict(sign_in_email_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


