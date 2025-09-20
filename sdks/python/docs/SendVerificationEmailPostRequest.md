# SendVerificationEmailPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email to send the verification email to | 
**callback_url** | **str** | The URL to use for email verification callback | [optional] 

## Example

```python
from better_auth.models.send_verification_email_post_request import SendVerificationEmailPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendVerificationEmailPostRequest from a JSON string
send_verification_email_post_request_instance = SendVerificationEmailPostRequest.from_json(json)
# print the JSON string representation of the object
print(SendVerificationEmailPostRequest.to_json())

# convert the object into a dict
send_verification_email_post_request_dict = send_verification_email_post_request_instance.to_dict()
# create an instance of SendVerificationEmailPostRequest from a dict
send_verification_email_post_request_from_dict = SendVerificationEmailPostRequest.from_dict(send_verification_email_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


