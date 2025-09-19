# EmailOtpVerifyEmailPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to verify | 
**otp** | **str** | OTP to verify | 

## Example

```python
from better_auth.models.email_otp_verify_email_post_request import EmailOtpVerifyEmailPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailOtpVerifyEmailPostRequest from a JSON string
email_otp_verify_email_post_request_instance = EmailOtpVerifyEmailPostRequest.from_json(json)
# print the JSON string representation of the object
print(EmailOtpVerifyEmailPostRequest.to_json())

# convert the object into a dict
email_otp_verify_email_post_request_dict = email_otp_verify_email_post_request_instance.to_dict()
# create an instance of EmailOtpVerifyEmailPostRequest from a dict
email_otp_verify_email_post_request_from_dict = EmailOtpVerifyEmailPostRequest.from_dict(email_otp_verify_email_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


