# SignUpEmailPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user | 
**email** | **str** | The email of the user | 
**password** | **str** | The password of the user | 
**image** | **str** | The profile image URL of the user | [optional] 
**callback_url** | **str** | The URL to use for email verification callback | [optional] 
**remember_me** | **bool** | If this is false, the session will not be remembered. Default is &#x60;true&#x60;. | [optional] 

## Example

```python
from better_auth.models.sign_up_email_post_request import SignUpEmailPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignUpEmailPostRequest from a JSON string
sign_up_email_post_request_instance = SignUpEmailPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignUpEmailPostRequest.to_json())

# convert the object into a dict
sign_up_email_post_request_dict = sign_up_email_post_request_instance.to_dict()
# create an instance of SignUpEmailPostRequest from a dict
sign_up_email_post_request_from_dict = SignUpEmailPostRequest.from_dict(sign_up_email_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


