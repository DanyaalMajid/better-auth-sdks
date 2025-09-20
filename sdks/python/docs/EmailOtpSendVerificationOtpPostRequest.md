# EmailOtpSendVerificationOtpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to send the OTP | 
**type** | **str** | Type of the OTP | 

## Example

```python
from better_auth.models.email_otp_send_verification_otp_post_request import EmailOtpSendVerificationOtpPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailOtpSendVerificationOtpPostRequest from a JSON string
email_otp_send_verification_otp_post_request_instance = EmailOtpSendVerificationOtpPostRequest.from_json(json)
# print the JSON string representation of the object
print(EmailOtpSendVerificationOtpPostRequest.to_json())

# convert the object into a dict
email_otp_send_verification_otp_post_request_dict = email_otp_send_verification_otp_post_request_instance.to_dict()
# create an instance of EmailOtpSendVerificationOtpPostRequest from a dict
email_otp_send_verification_otp_post_request_from_dict = EmailOtpSendVerificationOtpPostRequest.from_dict(email_otp_send_verification_otp_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


