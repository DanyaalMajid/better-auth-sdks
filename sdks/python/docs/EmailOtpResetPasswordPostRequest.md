# EmailOtpResetPasswordPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to reset the password | 
**otp** | **str** | OTP sent to the email | 
**password** | **str** | New password | 

## Example

```python
from better_auth.models.email_otp_reset_password_post_request import EmailOtpResetPasswordPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailOtpResetPasswordPostRequest from a JSON string
email_otp_reset_password_post_request_instance = EmailOtpResetPasswordPostRequest.from_json(json)
# print the JSON string representation of the object
print(EmailOtpResetPasswordPostRequest.to_json())

# convert the object into a dict
email_otp_reset_password_post_request_dict = email_otp_reset_password_post_request_instance.to_dict()
# create an instance of EmailOtpResetPasswordPostRequest from a dict
email_otp_reset_password_post_request_from_dict = EmailOtpResetPasswordPostRequest.from_dict(email_otp_reset_password_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


