# ForgetPasswordEmailOtpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to send the OTP | 

## Example

```python
from better_auth.models.forget_password_email_otp_post_request import ForgetPasswordEmailOtpPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ForgetPasswordEmailOtpPostRequest from a JSON string
forget_password_email_otp_post_request_instance = ForgetPasswordEmailOtpPostRequest.from_json(json)
# print the JSON string representation of the object
print(ForgetPasswordEmailOtpPostRequest.to_json())

# convert the object into a dict
forget_password_email_otp_post_request_dict = forget_password_email_otp_post_request_instance.to_dict()
# create an instance of ForgetPasswordEmailOtpPostRequest from a dict
forget_password_email_otp_post_request_from_dict = ForgetPasswordEmailOtpPostRequest.from_dict(forget_password_email_otp_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


