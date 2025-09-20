# EmailOtpCheckVerificationOtpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address the OTP was sent to | 
**type** | **str** | Type of the OTP | 
**otp** | **str** | OTP to verify | 

## Example

```python
from better_auth.models.email_otp_check_verification_otp_post_request import EmailOtpCheckVerificationOtpPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailOtpCheckVerificationOtpPostRequest from a JSON string
email_otp_check_verification_otp_post_request_instance = EmailOtpCheckVerificationOtpPostRequest.from_json(json)
# print the JSON string representation of the object
print(EmailOtpCheckVerificationOtpPostRequest.to_json())

# convert the object into a dict
email_otp_check_verification_otp_post_request_dict = email_otp_check_verification_otp_post_request_instance.to_dict()
# create an instance of EmailOtpCheckVerificationOtpPostRequest from a dict
email_otp_check_verification_otp_post_request_from_dict = EmailOtpCheckVerificationOtpPostRequest.from_dict(email_otp_check_verification_otp_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


