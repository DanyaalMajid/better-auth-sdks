# PhoneNumberVerifyPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Phone number to verify. Eg: \&quot;+1234567890\&quot; | 
**code** | **str** | OTP code. Eg: \&quot;123456\&quot; | 
**disable_session** | **bool** | Disable session creation after verification. Eg: false | [optional] 
**update_phone_number** | **bool** | Check if there is a session and update the phone number. Eg: true | [optional] 

## Example

```python
from better_auth.models.phone_number_verify_post_request import PhoneNumberVerifyPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberVerifyPostRequest from a JSON string
phone_number_verify_post_request_instance = PhoneNumberVerifyPostRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberVerifyPostRequest.to_json())

# convert the object into a dict
phone_number_verify_post_request_dict = phone_number_verify_post_request_instance.to_dict()
# create an instance of PhoneNumberVerifyPostRequest from a dict
phone_number_verify_post_request_from_dict = PhoneNumberVerifyPostRequest.from_dict(phone_number_verify_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


