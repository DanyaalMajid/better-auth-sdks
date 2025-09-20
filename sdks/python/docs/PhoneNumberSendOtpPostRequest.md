# PhoneNumberSendOtpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Phone number to send OTP. Eg: \&quot;+1234567890\&quot; | 

## Example

```python
from better_auth.models.phone_number_send_otp_post_request import PhoneNumberSendOtpPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberSendOtpPostRequest from a JSON string
phone_number_send_otp_post_request_instance = PhoneNumberSendOtpPostRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberSendOtpPostRequest.to_json())

# convert the object into a dict
phone_number_send_otp_post_request_dict = phone_number_send_otp_post_request_instance.to_dict()
# create an instance of PhoneNumberSendOtpPostRequest from a dict
phone_number_send_otp_post_request_from_dict = PhoneNumberSendOtpPostRequest.from_dict(phone_number_send_otp_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


