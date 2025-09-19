# SignInPhoneNumberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Phone number to sign in. Eg: \&quot;+1234567890\&quot; | 
**password** | **str** | Password to use for sign in. | 
**remember_me** | **bool** | Remember the session. Eg: true | [optional] 

## Example

```python
from better_auth.models.sign_in_phone_number_post_request import SignInPhoneNumberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInPhoneNumberPostRequest from a JSON string
sign_in_phone_number_post_request_instance = SignInPhoneNumberPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInPhoneNumberPostRequest.to_json())

# convert the object into a dict
sign_in_phone_number_post_request_dict = sign_in_phone_number_post_request_instance.to_dict()
# create an instance of SignInPhoneNumberPostRequest from a dict
sign_in_phone_number_post_request_from_dict = SignInPhoneNumberPostRequest.from_dict(sign_in_phone_number_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


