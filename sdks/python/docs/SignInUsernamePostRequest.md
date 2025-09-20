# SignInUsernamePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | The username of the user | 
**password** | **str** | The password of the user | 
**remember_me** | **bool** | Remember the user session | [optional] 
**callback_url** | **str** | The URL to redirect to after email verification | [optional] 

## Example

```python
from better_auth.models.sign_in_username_post_request import SignInUsernamePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInUsernamePostRequest from a JSON string
sign_in_username_post_request_instance = SignInUsernamePostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInUsernamePostRequest.to_json())

# convert the object into a dict
sign_in_username_post_request_dict = sign_in_username_post_request_instance.to_dict()
# create an instance of SignInUsernamePostRequest from a dict
sign_in_username_post_request_from_dict = SignInUsernamePostRequest.from_dict(sign_in_username_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


