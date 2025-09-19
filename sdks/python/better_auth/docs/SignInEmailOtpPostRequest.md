# SignInEmailOtpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to sign in | 
**otp** | **str** | OTP sent to the email | 

## Example

```python
from better_auth.models.sign_in_email_otp_post_request import SignInEmailOtpPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignInEmailOtpPostRequest from a JSON string
sign_in_email_otp_post_request_instance = SignInEmailOtpPostRequest.from_json(json)
# print the JSON string representation of the object
print(SignInEmailOtpPostRequest.to_json())

# convert the object into a dict
sign_in_email_otp_post_request_dict = sign_in_email_otp_post_request_instance.to_dict()
# create an instance of SignInEmailOtpPostRequest from a dict
sign_in_email_otp_post_request_from_dict = SignInEmailOtpPostRequest.from_dict(sign_in_email_otp_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


