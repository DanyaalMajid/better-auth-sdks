# PhoneNumberResetPasswordPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **str** | The one time password to reset the password. Eg: \&quot;123456\&quot; | 
**phone_number** | **str** | The phone number to the account which intends to reset the password for. Eg: \&quot;+1234567890\&quot; | 
**new_password** | **str** | The new password. Eg: \&quot;new-and-secure-password\&quot; | 

## Example

```python
from better_auth.models.phone_number_reset_password_post_request import PhoneNumberResetPasswordPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberResetPasswordPostRequest from a JSON string
phone_number_reset_password_post_request_instance = PhoneNumberResetPasswordPostRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberResetPasswordPostRequest.to_json())

# convert the object into a dict
phone_number_reset_password_post_request_dict = phone_number_reset_password_post_request_instance.to_dict()
# create an instance of PhoneNumberResetPasswordPostRequest from a dict
phone_number_reset_password_post_request_from_dict = PhoneNumberResetPasswordPostRequest.from_dict(phone_number_reset_password_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


