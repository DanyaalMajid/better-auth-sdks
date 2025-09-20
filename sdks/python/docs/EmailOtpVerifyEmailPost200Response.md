# EmailOtpVerifyEmailPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the verification was successful | [optional] 
**token** | **str** | Session token if autoSignInAfterVerification is enabled, otherwise null | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from better_auth.models.email_otp_verify_email_post200_response import EmailOtpVerifyEmailPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EmailOtpVerifyEmailPost200Response from a JSON string
email_otp_verify_email_post200_response_instance = EmailOtpVerifyEmailPost200Response.from_json(json)
# print the JSON string representation of the object
print(EmailOtpVerifyEmailPost200Response.to_json())

# convert the object into a dict
email_otp_verify_email_post200_response_dict = email_otp_verify_email_post200_response_instance.to_dict()
# create an instance of EmailOtpVerifyEmailPost200Response from a dict
email_otp_verify_email_post200_response_from_dict = EmailOtpVerifyEmailPost200Response.from_dict(email_otp_verify_email_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


